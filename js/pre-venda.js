/**
 * Segredos da Obsessão Masculina - Quiz Pré-venda
 * Versão: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o quiz
    initQuiz();
    
    // Inicializa AOS Animation se disponível
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }
    
    // Inicializa o Smooth Scroll
    initSmoothScroll();
});

/**
 * Configuração e gerenciamento do quiz
 */
function initQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    const quizQuestions = document.querySelectorAll('.quiz-question');
    const progressBar = document.querySelector('.quiz-progress-bar');
    const progressText = document.querySelector('.quiz-progress-text');
    const resultContainer = document.querySelector('.quiz-result');
    
    if (!quizContainer || !quizQuestions.length) return;
    
    let currentQuestion = 0;
    const totalQuestions = 3; // Reduzido para 3 perguntas
    
    // Esconde todas as perguntas, exceto a primeira
    quizQuestions.forEach((question, index) => {
        if (index !== 0) {
            question.style.display = 'none';
        }
    });
    
    // Atualiza o progresso
    updateProgress(1, totalQuestions);
    
    // Adiciona event listeners para as opções de resposta
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            // Destaca a opção selecionada
            const parentQuestion = this.closest('.quiz-question');
            parentQuestion.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            
            // Salva a resposta (opcional para uso posterior)
            const questionId = parentQuestion.dataset.questionId;
            const answerValue = this.dataset.value;
            saveAnswer(questionId, answerValue);
            
            // Avança para a próxima pergunta após um pequeno delay
            setTimeout(() => {
                nextQuestion();
            }, 500);
        });
    });
    
    /**
     * Avança para a próxima pergunta ou mostra o resultado
     */
    function nextQuestion() {
        // Esconde a pergunta atual
        quizQuestions[currentQuestion].style.display = 'none';
        
        // Avança para a próxima pergunta
        currentQuestion++;
        
        // Atualiza o progresso
        updateProgress(currentQuestion + 1, totalQuestions);
        
        // Se houver mais perguntas, exibe a próxima
        if (currentQuestion < totalQuestions) {
            quizQuestions[currentQuestion].style.display = 'block';
        } else {
            // Caso contrário, mostra o resultado
            showResult();
        }
    }
    
    /**
     * Atualiza a barra de progresso
     */
    function updateProgress(current, total) {
        if (progressBar && progressText) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `${current}/${total}`;
        }
    }
    
    /**
     * Salva a resposta do usuário (opcional)
     */
    function saveAnswer(questionId, value) {
        // Aqui você pode salvar as respostas se quiser usá-las posteriormente
        // Por exemplo, em localStorage ou em um objeto para análise
        console.log(`Pergunta ${questionId}: Resposta ${value}`);
    }
    
    /**
     * Exibe o resultado do quiz
     */
    function showResult() {
        // Esconde o container do quiz
        quizContainer.style.display = 'none';
        
        // Mostra o resultado
        if (resultContainer) {
            resultContainer.style.display = 'block';
            
            // Adiciona animação de entrada
            resultContainer.classList.add('fade-in');
            
            // Scroll até o resultado
            resultContainer.scrollIntoView({behavior: 'smooth'});
        }
    }
}

/**
 * Inicializa o scroll suave para os links de âncora
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetEl = document.querySelector(this.getAttribute('href'));
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
