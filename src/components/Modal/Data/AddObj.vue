<template>
    <div class="Modal">
        <div class="modal_i">
            <div class="md_first_line">
                <div class="md_title">Добавление объекта</div>
                <img src="../../../assets/images/close.svg" alt="">
            </div>
            <div class="inp_md">
                <label for="name">Название объекта</label>
                <input type="text" name="name" id="" placeholder="Зелёный остров в Черкесске">
            </div>
            <div class="inp_md">
                <label for="name">Населённый пункт</label>
                <input type="text" name="name" id="" placeholder="Архыз">
            </div>
            <div class="md_btns">
                <div class="md_btn">Отменить</div>
                <div class="md_btn">Сохранить</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddObj',
  comments: {}
}
</script>

<style scoped lang="scss">
.Modal {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal_i {
        background: #FFFFFF;
        border-radius: 20px;
        width: 910px;
        height: 420px;
        padding: 25px 35px;
    }
}

.md_first_line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .md_title {
        font-size: 32px;
        font-weight: 600;
        color: #2D3134;
    }

    img {
        height: 30px;
        width: 30px;
        cursor: pointer;
    }
}

.inp_md {
    margin-top: 2rem;

    input {
        width: 100%;
    }

    input::placeholder {
        color: #001A34;
    }
}

.md_btns {
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    margin-top: 3rem;

    .md_btn {
        width: 122px;
        height: 53px;
        background: #EB564C;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        cursor: pointer;
    }
    .md_btn:last-child{
        background: #23C6C8;
    }
}
</style>
