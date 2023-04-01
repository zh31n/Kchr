<template>
    <div class="Modal">
        <div class="modal_i">
            <div class="md_first_line">
                <div class="md_title">Редактирование отеля</div>
                <img @click="closeModal" src="../../assets/images/close.svg" alt="">
            </div>
            <div class="line_inps">
                <div class="inp">
                    <label for="name">Название отеля</label>
                    <input type="text" name="name" placeholder="Royal">
                </div>
                <div class="inp">
                    <label for="name">Звёздность</label>
                    <select name="" id="">
                        <option value="">0+</option>
                    </select>
                </div>
                <div class="inp">
                    <label for="name">Оснащение </label>
                    <select name="" id="">
                        <option value="">WI-FI</option>
                    </select>
                </div>
            </div>
            <div class="line_inps">
                <div class="inp">
                    <label for="name">Количество койко мест</label>
                    <input type="text" name="name" placeholder="350">
                </div>
                <div class="inp">
                    <label for="name">Стилистика</label>
                    <select name="" id="">
                        <option value="">Вагон-домик</option>
                    </select>
                </div>
                <div class="inp">
                    <label for="name">Тип</label>
                    <select name="" id="">
                        <option value="">отель</option>
                    </select>
                </div>
            </div>
            <div class="inp_point">
                <label for="point">Город (Населённый пункт)</label>
                <input type="text" name="point" placeholder="Архыз">
            </div>
            <div class="line_inps" style="align-items: flex-start !important;">
                <div class="inp">
                    <label for="">Полное описание</label>
                    <textarea placeholder="Конный прокат"></textarea>
                </div>
                <div class="inp">
                    <label for="name">Номер телефона</label>
                    <input type="text" name="name" placeholder="+7-993-338-37-76">
                </div>
            </div>
            <div class="add_img">
                <div class="img_count">
                    <div class="add_img_btn">Добавить фотографию</div>
                    <span>1/5</span>
                </div>
                <div class="h_images">
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                    <div class="h_img">
                        <img src="../../assets/images/close.svg" alt="">
                    </div>
                </div>
                <div class="add_img_btn" style="width: 171px;">Добавить номер</div>
                <div class="names">1. Двухместный номер Standart</div>
                <div class="names">2. Двухместный номер LUX</div>
                <div class="md_btns">
                    <div class="md_btn">Отменить</div>
                    <div class="md_btn">Сохранить</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ChangeHotel',
  data: function () {
    return {}
  },
  methods: {
    closeModal: function () {
      this.$emit('closeModal')
    }
  }
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
        height: 900px;
        padding: 25px 35px;
        overflow: auto;
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

.line_inps {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input,
    select {
        width: 250px;
    }
}

.inp_point {
    margin-top: 2rem;

    input {
        width: 100%;
    }
}

.inp {
    textarea {
        width: 530px;
        height: 150px;
    }
}

.add_img {
    margin-top: 2rem;

    .img_count {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .add_img_btn {
        width: 217px;
        height: 35px;
        background: #23C6C8;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        margin-bottom: 1rem;
    }

    span {
        font-size: 16px;
        color: #FF0000;
        font-weight: 500;
    }

    .h_images {
        margin-top: 2rem;
        margin-bottom: 2rem;
        display: flex;
        width: 500px;
        justify-content: flex-start;
        gap: 10px;
        flex-wrap: wrap;

        .h_img {
            height: 70px;
            width: 70px;
            border-radius: 5px;
            display: flex;
            justify-content: flex-end;
            background-image: url(../../assets/images/img_adding.jpg);

            img {
                width: 15px;
                height: 15px;
            }
        }
    }

    .names {
        font-size: 16px;
        font-weight: 500;
        color: #001A34;
        margin-bottom: 5px;
    }
}

.md_btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;

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
        background-color: #23C6C8;
    }
}

</style>
