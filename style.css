/* ===== IMPORTAÇÃO DE FONTE ===== */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

/* ===== RESET ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===== BODY ===== */
body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #0a0a0a;
    font-family: 'Lora', 'Georgia', serif;
    background-image: 
        radial-gradient(ellipse at 20% 50%, rgba(44, 24, 16, 0.6) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 50%, rgba(30, 60, 44, 0.4) 0%, transparent 60%),
        radial-gradient(ellipse at 50% 100%, rgba(44, 24, 16, 0.3) 0%, transparent 50%);
    background-color: #0a0a0a;
}

/* ===== CONTAINER ===== */
.game-container {
    max-width: 880px;
    width: 100%;
    background: #1a1210;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 
        0 0 60px rgba(212, 163, 115, 0.08),
        0 20px 60px rgba(0, 0, 0, 0.8),
        inset 0 1px 0 rgba(212, 163, 115, 0.1);
    border: 1px solid rgba(212, 163, 115, 0.15);
    transition: all 0.5s ease;
}

.game-container:hover {
    box-shadow: 
        0 0 80px rgba(212, 163, 115, 0.12),
        0 30px 80px rgba(0, 0, 0, 0.9),
        inset 0 1px 0 rgba(212, 163, 115, 0.15);
}

/* ===== HEADER ===== */
.header {
    padding: 30px 30px 20px;
    background: linear-gradient(180deg, #1a1210 0%, #0f0a08 100%);
    text-align: center;
    border-bottom: 1px solid rgba(212, 163, 115, 0.1);
    position: relative;
}

.header-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.header-icon {
    font-size: 1.8rem;
    opacity: 0.4;
    animation: pulseIcon 3s ease-in-out infinite;
}

@keyframes pulseIcon {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
}

.header h1 {
    font-family: 'Playfair Display', 'Georgia', serif;
    font-size: 2.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #f0d8a8 0%, #d4a373 40%, #f0d8a8 70%, #d4a373 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: goldShine 4s ease-in-out infinite;
    letter-spacing: 6px;
}

@keyframes goldShine {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.subtitle {
    color: rgba(160, 128, 96, 0.6);
    font-size: 1rem;
    font-style: italic;
    margin-top: 6px;
    letter-spacing: 2px;
}

.header-line {
    width: 120px;
    height: 2px;
    margin: 16px auto 0;
    background: linear-gradient(90deg, transparent, rgba(212, 163, 115, 0.4), transparent);
    border-radius: 2px;
}

/* ===== CENA IMAGEM ===== */
.scene-image {
    width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
    background: #0f0a08;
}

.scene-image::before {
    content: '';
    position: absolute;
    inset: 0;
    background: 
        radial-gradient(ellipse at 30% 50%, rgba(212, 163, 115, 0.05) 0%, transparent 70%),
        radial-gradient(ellipse at 70% 50%, rgba(212, 163, 115, 0.03) 0%, transparent 70%);
    z-index: 1;
}

.scene-overlay {
    position: absolute;
    inset: 0;
    background: 
        linear-gradient(90deg, transparent 0%, rgba(212, 163, 115, 0.02) 50%, transparent 100%);
    z-index: 2;
    animation: overlayMove 8s ease-in-out infinite;
}

@keyframes overlayMove {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
}

.scene-content {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

.scene-icon {
    font-size: 5rem;
    filter: drop-shadow(0 4px 20px rgba(212, 163, 115, 0.15));
    animation: floatIcon 4s ease-in-out infinite;
    transition: all 0.4s ease;
    cursor: default;
}

.scene-icon:nth-child(2) { animation-delay: 0.8s; }
.scene-icon:nth-child(3) { animation-delay: 1.6s; }

@keyframes floatIcon {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(-2deg); }
    75% { transform: translateY(-5px) rotate(2deg); }
}

.scene-icon:hover {
    transform: scale(1.2) rotate(-5deg);
    filter: drop-shadow(0 8px 30px rgba(212, 163, 115, 0.3));
}

/* ===== PROGRESSO ===== */
.progress-container {
    padding: 16px 30px 12px;
    background: rgba(15, 10, 8, 0.5);
    border-bottom: 1px solid rgba(212, 163, 115, 0.05);
}

.progress-label {
    color: rgba(160, 128, 96, 0.5);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 6px;
    font-weight: 600;
}

.progress-bar {
    width: 100%;
    height: 3px;
    background: rgba(212, 163, 115, 0.08);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, #d4a373, #f0d8a8, #d4a373);
    background-size: 200% 100%;
    border-radius: 4px;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    animation: progressShine 2s linear infinite;
}

@keyframes progressShine {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

/* ===== CONTEÚDO ===== */
.content {
    padding: 30px 35px 28px;
    background: #1a1210;
}

/* ===== TEXTO DA HISTÓRIA ===== */
.story-text {
    background: linear-gradient(145deg, #221a16, #1a1210);
    padding: 32px 35px;
    border-radius: 16px;
    margin-bottom: 28px;
    font-size: 1.1rem;
    line-height: 1.9;
    color: #d4c4b0;
    min-height: 210px;
    border-left: 4px solid rgba(212, 163, 115, 0.3);
    border-right: 1px solid rgba(212, 163, 115, 0.05);
    box-shadow: 
        inset 0 2px 20px rgba(0, 0, 0, 0.4),
        0 4px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    font-family: 'Lora', 'Georgia', serif;
}

.story-text::before {
    content: '❝';
    position: absolute;
    top: 12px;
    left: 16px;
    font-size: 3.5rem;
    color: rgba(212, 163, 115, 0.06);
    font-family: 'Georgia', serif;
    line-height: 1;
}

.story-text::after {
    content: '❞';
    position: absolute;
    bottom: 12px;
    right: 20px;
    font-size: 3.5rem;
    color: rgba(212, 163, 115, 0.06);
    font-family: 'Georgia', serif;
    line-height: 1;
}

/* ===== ESCOLHAS ===== */
.choices-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
}

.choice-btn {
    width: 100%;
    padding: 16px 24px;
    background: linear-gradient(135deg, #221a16, #1a1210);
    border: 1px solid rgba(212, 163, 115, 0.12);
    border-radius: 12px;
    color: #d4c4b0;
    font-family: 'Lora', 'Georgia', serif;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: left;
    position: relative;
    overflow: hidden;
}

.choice-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(212, 163, 115, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.3s;
}

.choice-btn:hover::before {
    opacity: 1;
}

.choice-btn:hover {
    border-color: rgba(212, 163, 115, 0.3);
    transform: translateX(8px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, #2a1e18, #1a1210);
}

.choice-btn:active {
    transform: scale(0.98) translateX(4px);
}

.choice-number {
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: rgba(212, 163, 115, 0.06);
    border-radius: 50%;
    margin-right: 14px;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(212, 163, 115, 0.4);
    transition: all 0.3s;
}

.choice-btn:hover .choice-number {
    background: rgba(212, 163, 115, 0.12);
    color: rgba(212, 163, 115, 0.6);
}

/* ===== BOTÕES DE AÇÃO ===== */
.action-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn {
    padding: 14px 28px;
    border: none;
    border-radius: 12px;
    font-family: 'Lora', 'Georgia', serif;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    justify-content: center;
    min-width: 140px;
}

.btn-icon {
    font-size: 1.1rem;
}

.btn-reset {
    background: linear-gradient(135deg, #2c1810, #1a0e0a);
    color: rgba(212, 163, 115, 0.7);
    border: 1px solid rgba(212, 163, 115, 0.08);
}

.btn-reset:hover {
    background: linear-gradient(135deg, #3a2218, #2c1810);
    border-color: rgba(212, 163, 115, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    color: rgba(212, 163, 115, 0.9);
}

.btn-back {
    background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
    color: rgba(160, 128, 96, 0.5);
    border: 1px solid rgba(160, 128, 96, 0.05);
}

.btn-back:hover {
    background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
    border-color: rgba(160, 128, 96, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    color: rgba(160, 128, 96, 0.7);
}

.btn:active {
    transform: scale(0.96) !important;
}

/* ===== FOOTER ===== */
.footer {
    padding: 24px 30px 20px;
    background: linear-gradient(0deg, #0f0a08, #1a1210);
    border-top: 1px solid rgba(212, 163, 115, 0.05);
    text-align: center;
}

.footer-text {
    color: rgba(160, 128, 96, 0.3);
    font-size: 0.8rem;
    letter-spacing: 1px;
}

.footer-quote {
    color: rgba(160, 128, 96, 0.15);
    font-size: 0.75rem;
    font-style: italic;
    margin-top: 6px;
    letter-spacing: 0.5px;
}

.footer-dots {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    gap: 8px;
}

.dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(212, 163, 115, 0.08);
    transition: all 0.3s;
}

.dot:nth-child(2) {
    background: rgba(212, 163, 115, 0.15);
    width: 6px;
    height: 6px;
}

/* ===== ANIMAÇÕES ===== */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 768px) {
    .content {
        padding: 22px 20px 20px;
    }

    .story-text {
        padding: 24px 20px;
        font-size: 1rem;
        min-height: 170px;
    }

    .header h1 {
        font-size: 2.2rem;
        letter-spacing: 4px;
    }

    .header {
        padding: 22px 20px 16px;
    }

    .scene-image {
        height: 170px;
    }

    .scene-icon {
        font-size: 3.8rem;
        gap: 35px;
    }

    .choice-btn {
        padding: 14px 18px;
        font-size: 0.95rem;
    }

    .btn {
        padding: 12px 20px;
        font-size: 0.95rem;
        min-width: 100px;
    }

    .progress-container {
        padding: 12px 20px 10px;
    }
}

@media (max-width: 480px) {
    body {
        padding: 10px;
    }

    .game-container {
        border-radius: 20px;
    }

    .content {
        padding: 16px 14px 16px;
    }

    .story-text {
        padding: 18px 16px;
        font-size: 0.9rem;
        min-height: 140px;
        border-left-width: 3px;
    }

    .header h1 {
        font-size: 1.6rem;
        letter-spacing: 2px;
    }

    .header-top {
        gap: 10px;
    }

    .header-icon {
        font-size: 1.2rem;
    }

    .subtitle {
        font-size: 0.8rem;
    }

    .scene-image {
        height: 130px;
    }

    .scene-icon {
        font-size: 2.8rem;
        gap: 20px;
    }

    .choice-btn {
        padding: 12px 14px;
        font-size: 0.85rem;
        border-radius: 10px;
    }

    .choice-number {
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 0.7rem;
        margin-right: 10px;
    }

    .action-buttons {
        flex-direction: column;
    }

    .btn {
        width: 100%;
        min-width: unset;
        padding: 12px 16px;
        font-size: 0.85rem;
    }

    .progress-container {
        padding: 10px 14px 8px;
    }

    .progress-label {
        font-size: 0.6rem;
    }

    .footer {
        padding: 16px 14px 14px;
    }

    .footer-text {
        font-size: 0.7rem;
    }

    .footer-quote {
        font-size: 0.65rem;
    }
}
