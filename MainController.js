import { ProjectFactory } from "./ProjectFactory.js";


export class MainController {

    constructor() {
       this.newprojectFactory = new ProjectFactory;
    }

    start() {
        this.showMessage('Loading..');
        let arr = this.newprojectFactory.getAllProjects();
        this.hideMessage();
        this.fillList(arr);
    }

    search() {
        this.showMessage("Searching..");
        const term = document.getElementById('term').value;
        this.hideMessage();
        let arr = this.newprojectFactory.searchProjects(term);
        this.fillList(arr);
    }

    fillList(arr) {
        this.clearList();
        var projectlistView = document.getElementById("projects");
        if (arr.length === 0) {
            this.showMessage("No result found..");
        } else {
            arr.forEach(element => {
                var node = document.createElement('li');
                node.appendChild(document.createTextNode(element['name']));
                projectlistView.appendChild(node);
            });
        }
    }

    clearList() {
        var projectlistView = document.getElementById("projects");
        var child = projectlistView.lastElementChild;
        while (child) {
            projectlistView.removeChild(child);
            child = projectlistView.lastElementChild;
        }
    }

    showMessage(message) {
        const msgView = document.getElementById('message');
        msgView.innerHTML = message;
        msgView.style.display = 'block';
    }
    hideMessage() {
        const msgView = document.getElementById('message');
        msgView.innerHTML = '';
        msgView.style.display = 'none';
    }

}



