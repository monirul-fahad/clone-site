const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
  })


// service delete
const service = document.getElementById('delete')

service.addEventListener('click', deleteItem);

function deleteItem(e){
if (e.target.classList.contains('delete')) {
  if (confirm("Are you sure you don't need this service?")) {
    var item = e.target.parentElement;
    service.removeChild(item);
  }
}
}