function proizvodi(){
    var hovproizvodi = document.getElementById("hovproizvodi");
    var hovproizvodii = document.getElementById("hovproizvodii");
    var hovproizvodiii = document.getElementById("hovproizvodiii");
    var hovproizvodiiii = document.getElementById("hovproizvodiiii");
    var hovproizvodiiiii = document.getElementById("hovproizvodiiiii");
    var hovproizvodiiiiii = document.getElementById("hovproizvodiiiiii");
    var hovproizvodiiiiiii = document.getElementById("hovproizvodiiiiiii");
    var hovproizvodiiiiiiii = document.getElementById("hovproizvodiiiiiiii");
    
    hovproizvodi.style.opacity = "1";
    hovproizvodii.style.opacity = "1";
    hovproizvodiii.style.opacity = "1";
    hovproizvodiiii.style.opacity = "1";
    hovproizvodiiiii.style.opacity = "1";
    hovproizvodiiiiii.style.opacity = "1";
    hovproizvodiiiiiii.style.opacity = "1";
    hovproizvodiiiiiiii.style.opacity = "1";
    
}
    



















/*(function() {
		
        let field = document.querySelector('.proizvodi');
        let li = Array.from(field.children);

        function FilterProduct() {
            for(let i of li){
                const name = i.querySelector('strong');
                const x = name.textContent;
                i.setAttribute("kategorija", x);
            }

            let indikator = document.querySelector('.indikator').children;

            this.run = function() {
                for(let i=0; i<indikator.length; i++)
                {
                    indikator[i].onclick = function () {
                        for(let x=0; x<indikator.length; x++)
                        {
                            indikator[x].classList.remove('active');
                        }
                        this.classList.add('active');
                        const displayItems = this.getAttribute('data-filter');

                        for(let z=0; z<li.length; z++)
                        {
                            li[z].style.transform = "scale(0)";
                            setTimeout(()=>{
                                li[z].style.display = "none";
                            }, 500);

                            if ((li[z].getAttribute('kategorija') == displayItems) || displayItems == "Sve")
                            {
                                li[z].style.transform = "scale(1)";
                                setTimeout(()=>{
                                    li[z].style.display = "block";
                                }, 500);
                            }
                        }
                    };
                }
            }
        }

        function SortProduct() {
            let select = document.getElementById('select');
            let ar = [];
            for(let i of li){
                const last = i.lastElementChild;
                const x = last.textContent.trim();
                const y = Number(x.substring(1));
                i.setAttribute("cena", y);
                ar.push(i);
            }
            this.run = ()=>{
                addevent();
            }
            function addevent(){
                select.onchange = sortingValue;
            }
            function sortingValue(){
            
                if (this.value === 'Podrazumevano') {
                    while (field.firstChild) {
                        field.removeChild(field.firstChild);
                    }
                    field.append(...ar);	
                }
                if (this.value === 'Rastuce') {
                    SortElem(field, li, true);
                }
                if (this.value === 'Opadajuce') {
                    SortElem(field, li, false);
                }
            }
            function SortElem(field,li, asc){
                let  dm, sortli;
                dm = asc ? 1 : -1;
                sortli = li.sort((a, b)=>{
                    const ax = a.getAttribute('cena');
                    const bx = b.getAttribute('cena');
                    return ax > bx ? (1*dm) : (-1*dm);
                });
                while (field.firstChild) {
                    field.removeChild(field.firstChild);
                    }
                field.append(...sortli);	
            }
        }

        new FilterProduct().run();
        new SortProduct().run();
})();*/