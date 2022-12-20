class ErrorHandler {
    constructor() {
        // RAII

        this.errorText = document.getElementById("errorText");

        const init = (() => {
            this.clearError(null);
        })();
    }

    setError(textInputElement, errorMessage) {
        errorText.innerHTML += "<li>" + errorMessage + "</li>";
        errorText.style.display = "block";
        if (textInputElement) textInputElement.classList.add("errorTextInput");
    }

    clearError(textInputElement) {
        errorText.innerHTML = "";
        errorText.style.display = "none";
        if (textInputElement) textInputElement.classList.remove("errorTextInput");
    }
}