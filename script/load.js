document.addEventListener("DOMContentLoaded", ready);
function ready() {
  alert('Сайт успешно загружен');
}

window.onbeforeunload = function() {
  return "Есть несохранённые изменения. Всё равно уходим?";
};
