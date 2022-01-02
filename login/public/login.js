var userID ="";
window.onload = function () {
    const loginId = document.querySelector('form')
    loginId.addEventListener('submit', function (e) {
        userID ="";
        console.log('e')
        e.preventDefault();
        var username = String(document.getElementById("username").value);
        var password = String(document.getElementById("password").value);
        console.log(username)
        console.log(password)
        var docRef = firebase.firestore().collection("USER").where("user", "==", username).where("password", "==", password);
        docRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                userID = doc.id;
                alert("Sucess");
                // Do somethinghere
                //
                //
                // function here
            });
            if(userID=="") 
                alert("Your username or password are wrong");
        })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });

    })
}

function validate(e) {

    // alert("OKE")
}

