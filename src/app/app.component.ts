import { Component } from '@angular/core';
import { PalindromeService } from '../service/palindrome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PalindromeService]
})
export class AppComponent {

  public result = ''

  constructor(private palindromeService: PalindromeService) {

  }

  public onSubmitClick(word: string): void {
    if(word!==''){
      this.palindromeService.isPalindrome(word).subscribe(
        response => this.result = response.message,
        error => {
          this.result = error.status === 400 ? error.error.message : error.message
        }
      )
    }else{
      this.result = 'Please take a input'
    }
  }
}
