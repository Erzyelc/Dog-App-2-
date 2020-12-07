function generateDogs(){
    let url = 'https://dog.ceo/api/breeds/image/random/' + $('.numberInput').val();
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => console.log(error)); //alert('uh-oh, that was NOT supposed to happen'));
}


function formInput(){
    $('form').submit(event => {
        event.preventDefault();
        generateDogs();
    });
}

$(function() {
    console.log('The app has successfully loaded!');
    formInput();
});