document.addEventListener('DOMContentLoaded', () => {
    const fortuneStick = document.getElementById('fortuneStick');
    const shakeButton = document.getElementById('shakeButton');
    const result = document.getElementById('result');
    const interpretation = document.getElementById('interpretation');

    const fortunes = {
        great: {
            text: '上上签',
            interpretation: '大吉大利，万事如意。事业顺利，财运亨通，感情美满，健康平安。'
        },
        good: {
            text: '上签',
            interpretation: '吉星高照，运势上升。虽有波折，但终能逢凶化吉，得偿所愿。'
        },
        medium: {
            text: '中签',
            interpretation: '平平稳稳，顺其自然。保持平常心，脚踏实地，终有所成。'
        },
        bad: {
            text: '下签',
            interpretation: '暂时不顺，需要谨慎。保持耐心，修身养性，等待时机。'
        }
    };

    function getRandomFortune() {
        const random = Math.random() * 100;
        if (random <= 91) {
            return fortunes.great;
        } else if (random <= 94) {
            return fortunes.good;
        } else if (random <= 97) {
            return fortunes.medium;
        } else {
            return fortunes.bad;
        }
    }

    function shakeFortuneStick() {
        // 添加摇动动画
        fortuneStick.classList.add('shake');
        
        // 禁用按钮
        shakeButton.disabled = true;
        
        // 清除之前的结果
        result.textContent = '';
        result.className = 'result';
        interpretation.textContent = '';
        interpretation.className = 'interpretation';
        
        // 动画结束后显示结果
        setTimeout(() => {
            fortuneStick.classList.remove('shake');
            const fortune = getRandomFortune();
            result.textContent = fortune.text;
            result.classList.add(fortune.type);
            interpretation.textContent = fortune.interpretation;
            interpretation.classList.add(fortune.type);
            
            // 重新启用按钮
            shakeButton.disabled = false;
        }, 1000);
    }

    shakeButton.addEventListener('click', shakeFortuneStick);
}); 