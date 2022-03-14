import '../css/styles.scss';  
import img from '../assets/img/bg.jpg';

const textComponent = () => {
    const elh1 = document.createElement('h1');
    elh1.innerHTML = 'Olá mundo!';
    elh1.classList.add('title');
    return elh1;
}
const imgComponent = () => {
    const elimg = new Image(300, 150);
    elimg.src = img;
    return elimg;
}
document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());