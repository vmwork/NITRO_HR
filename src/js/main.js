(function () {


        document.querySelectorAll('a[href^="#"').forEach(link => {

            link.addEventListener('click', function(e) {
                e.preventDefault();
        
                let href = this.getAttribute('href').substring(1);
        
                const scrollTarget = document.getElementById(href);
        
                const topOffset = document.querySelector('.scrollto').offsetHeight;
                // const topOffset = 0; // если не нужен отступ сверху 
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
        
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });

        function writeUs() {
            const writeMail = document.querySelectorAll('.write-js');
            const telegramName = document.querySelector('.write-mail p').textContent
            writeMail.forEach(btn =>{
                btn.addEventListener('click', () =>{
                        console.log(telegramName.substring(1));
                    window.open(`https://t.me/${telegramName.substring(1)}`);

                
                })
            })
        }
        writeUs()
        function cliboard(){
            const copy = document.querySelector('.copy-js');
            copy.addEventListener('click', () =>{
                const copyText  = document.querySelector('.write-copy p').textContent
             
                navigator.clipboard.writeText(copyText)
                
            })
        }
        cliboard()
       
})();