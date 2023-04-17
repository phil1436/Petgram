import { HostListener,Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Petgram';

  smallHeaderDisplay:string = 'none';
  bigHeaderDisplay:string = 'block';

  posts = shuffle([
    {
      img: 'assets/pets/1.jpg',
      text: 'Superslon activated!😎'
    },
    {
      img: 'assets/pets/2.jpg',
      text: 'Hello I am Ralph and I like food...'
    },
    {
      img: 'assets/pets/3.jpg',
      text: 'Mr. Kaninchen is here!🐰'
    },
  ]);
  
  proposals = shuffle([
    {
      img: 'assets/pets/3.jpg',
      name: 'Mr. Kaninchen',
      description: '2 Years old'
    },
    {
      img: 'assets/pets/4.jpg',
      name: 'Robby',
      description: '23 Years old'
    },
  ]);

  @HostListener('window:scroll', ['$event'])

  OnScroll(event:any) {
    let value = window.scrollY;
    if(value > 0){
      this.smallHeaderDisplay = 'block';
      this.bigHeaderDisplay = 'none';
    }else{
      this.smallHeaderDisplay = 'none';
      this.bigHeaderDisplay = 'block';
    }
  }
}

/**
 * Shuffles array in place.
 * @param array The array to shuffle
 * @returns The shuffled array
 */
function shuffle(array: any[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}