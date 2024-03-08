const Stack = require('./stack');

class BrowserHistory {
    constructor() {
        this.backStack = new Stack();
        this.forwardStack = new Stack();
        this.currentUrl = null;
    }

    /** visit a new URL. clears the forward history */

    visit(url) {
        this.backStack.push(this.currentUrl);
        this.forwardStack = new Stack(); // clear forward history
        this.currentUrl = url;
    }

    /** Navigate back to the previous URL */
    back() {
        if (!this.backStack.isEmpty()) {
            this.forwardStack.push(this.currentUrl);
            this.currentUrl = this.backStack.pop();
        } else {
            console.log("Cannot go backk. Back history is empty.");
        }
    }

    /** Navigate forward to the next URL */

    forward() {
        if (!this.forwardStack.isEmpty()) {
            this.backStack.push(this.currentUrl);
            this.currentUrl = this.forwardStack.pop();
        } else {
            console.log("Cannot go forward. Forward history is empty.")
        }
    }

    /** Get the current URL */
    getCurrentUrl() {
        return this.currentUrl;
    }

    /** Check if there is a URL to go back to */
    canGoBack() {
        return !this.backStack.isEmpty();
    }

    canGoForward() {
        return !this.forwardStack.isEmpty();
    }
}

module.exports = BrowserHistory;