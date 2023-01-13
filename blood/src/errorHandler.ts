export class ErrorHandler {
    errorText: HTMLElement;
    constructor() {
        this.errorText = document.querySelector("#errorText")!;
        this.clearError(null);
    }

    setError(textInputElement: HTMLInputElement | null, errorMessage: string) {
        this.errorText.innerHTML += "<li>" + errorMessage + "</li>";
        this.errorText.style.display = "block";
        if (textInputElement) textInputElement.classList.add("errorTextInput");
    }

    clearError(textInputElement: HTMLInputElement | null) {
        this.errorText.innerHTML = "";
        this.errorText.style.display = "none";
        if (textInputElement) textInputElement.classList.remove("errorTextInput");
    }
}