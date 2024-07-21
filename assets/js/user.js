document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {Object});


  const addUserButton = document.getElementById('add-user-buttom')
  addUserButton.addEventListener('click',()=>{
    document.querySelector('.add-user-model').classList.add('show')
    document.querySelector('.add-user-model-back').classList.remove('dis-none')
  })
  document.querySelector('.add-user-model-back').addEventListener('click',()=>{
    document.querySelector('.add-user-model').classList.remove('show')
    document.querySelector('.add-user-model-back').classList.add('dis-none')
  })
    
  });