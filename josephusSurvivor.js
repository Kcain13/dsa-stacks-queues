const LinkedList = require('./linkedList');

function josephusSurvivor(numPeople, skip) {
    if (numPeople < 1 || skip < 1) {
        throw new Error('Invalid input. Both numPeople and skip must be positive integers.');
    }

    const circle = new LinkedList();

    // Populate the circular linked list with people numbered from 1 to numPeople

    for (let i = 1; i <= numPeople; i++) {
        circle.addToEnd(i);
    }

    let currentNode = circle.head;

    // Elimination process
    while (circle.size > 1) {
        for (let i = 1; i < skip; i++) {
            currentNode = currentNode.next || circle.head // circulare movement
        }

        // Eliminate the person
        const eliminatedNode = currentNode;
        currentNode = eliminatedNode.next || circle.head; // circular movement
        circle.remove(eliminatedNode.val);
    }

    return circle.head.val; // the survivor's position
}