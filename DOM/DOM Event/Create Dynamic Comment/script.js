// Catch button
document.getElementById("post").addEventListener('click',function(){
    //Catch Written comment
    const comment = document.getElementById("comment-box");
    var commentText=comment.value;

    //Create new paragraph
    const p = document.createElement('p');
    p.innerText = commentText;

    //Set new paragraph in parent of comment section
    const commentSection = document.getElementById("comment-section");
    commentSection.appendChild(p);

    //Clear Comment Box
    comment.value = '';

})  