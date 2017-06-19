### 笔记

想要在选择 select 的某个选项时触发事件，应该将 change 事件绑定于 <select\> 标签；而非将 click 事件绑定于 <option\> 标签。

    var select = document.querySelector('select');
    select.addEventListener('change', handler);