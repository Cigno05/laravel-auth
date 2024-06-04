import './bootstrap';
import '~resources/scss/app.scss';
import '~icons/bootstrap-icons.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

document.querySelectorAll('.form-delete').forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const modalEl = form.querySelector('.modal');
        const modalElRun = form.querySelector('.modal-run');
        const modalElStop = form.querySelector('.modal-stop');

        modalEl.classList.add('visible');
        
        modalElStop.addEventListener('click', function(){
            console.log(modalEl);
            modalEl.classList.remove('invisible');
        });
        
        modalElRun.addEventListener('click', function(){
            
            form.submit();
        });


    })
})
