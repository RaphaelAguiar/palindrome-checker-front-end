import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class PalindromeService {
    constructor(private http: HttpClient) {

    }

    public isPalindrome(word: string): Observable<any> {
        return this.http.post<any>(
            "/is-palindrome",
            {word: word}
        );
    }
}