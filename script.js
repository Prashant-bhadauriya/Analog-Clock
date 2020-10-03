
        const secHand = document.querySelector('.sec-hand');
        const minHand = document.querySelector('.min-hand');
        const hrsHand = document.querySelector('.hrs-hand')
        function setDate(){
            const now = new Date();
            const sec = now.getSeconds();
            const secDeg = ((sec/60)*360) + 90;
            secHand.style.transform = `rotate(${secDeg}deg`;
            
            const min = now.getMinutes();
            const minDeg = ((min/60)*360) + 90;
            minHand.style.transform = `rotate(${minDeg}deg`;

            const hrs = now.getHours();
            const hrsDeg = ((hrs/12)*360) + 90;
            hrsHand.style.transform = `rotate(${hrsDeg}deg`;

        }
        setInterval(setDate,1000);