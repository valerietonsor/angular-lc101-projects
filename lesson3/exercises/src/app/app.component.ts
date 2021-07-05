import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  moveUpEnabled: boolean = true;
  moveDownEnabled: boolean = true; 
  moveRightEnabled: boolean = true; 
  moveLeftEnabled: boolean = true; 

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false; 
}
}

  handleLand(rocketImage){ 
    rocketImage.style.bottom = '0px';
    let result = window.confirm('Are you sure the shuttle is ready for landing?'); 
    if (result){ 
      this.color = 'green'; 
      this.height = 0; 
      this.width = 0; 
      this.message = 'Shuttle has landed'; 
      this.takeOffEnabled = true; 
       
    }
  }

  handleAbort(rocketImage){ 
    rocketImage.style.bottom = '0px';
    let result = window.confirm('Are you sure you would like to abort the mission?'); 
    if (result){ 
      this.color = 'green'; 
      this.height = 0; 
      this.width = 0; 
      this.message = 'MISSION ABORTED'; 
      this.takeOffEnabled = true; 
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
      
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    
      }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
        }

    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
        }
 }

  backgroundWarning(){ 
    if (this.height >= 330000 || this.height <= 0) { 
      this.color = 'orange'; 
    }
    else { 
      this.color = 'blue';  
    }

  }

  backgroundWarningWidth(){ 
    if (this.width >= 430000 || this.width <= 0){ 
      this.color = 'orange'; 
    }
    else { 
      this.color = 'blue'; 

  }
}

moveUpOff(){ 
  if (this.height >= 330000){ 
    this.moveUpEnabled = false; 
  }
  else { 
    this.moveUpEnabled = true; 
  }
}
moveDownOff(){ 
  if (this.height <= 0){ 
    this.moveDownEnabled = false; 
  }
  else { 
    this.moveDownEnabled = true; 
  }
}
moveRightOff(){ 
  if (this.width >= 430000){ 
    this.moveRightEnabled = false; 
  }
  else { 
    this.moveRightEnabled = true; 
  }
}
moveLeftOff(){ 
  if (this.width <= 0){ 
    this.moveLeftEnabled = false; 
    }
  else { 
    this.moveLeftEnabled = true; 
  }
}
}
