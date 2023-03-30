<template>
    <div class="content-wrapper">
        <AddObj />
        <div class="data_block">
            <div class="inputs_data">
                <div class="inputs_data_i">
                    <div class="input_data">
                        <label for="types">Тип данных</label>
                        <select name="types">
                            <option default value="">Турпоток</option>
                        </select>
                    </div>
                    <div class="input_data">
                        <label for="date">Год</label>
                        <input class="inp_year" type="text" name="date" placeholder="01.01.2022 - 01.01.2023">
                    </div>
                    <div class="button_data_check">Отобразить</div>
                </div>
                <div class="button_data_add">Добавить новый объект</div>
            </div>
            <div class="table_stat">
                <div class="table_stat_h">
                    <div class="">Январь</div>
                    <div class="">Февраль</div>
                    <div class="">Март</div>
                    <div class="">Апрель</div>
                    <div class="">Май</div>
                    <div class="">Июнь</div>
                    <div class="">Июль</div>
                    <div class="">Август</div>
                    <div class="">Сентябрь</div>
                    <div class="">Октябрь</div>
                    <div class="">Ноябрь</div>
                    <div class="">Декабрь</div>
                </div>
                <div class="table_stat_lines">
                    <div class="table_stat_line">
                        <div class="">Медовые водопады</div>
                        <div class="table_stat_inps">
                            <input class="inp_green" type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="table_stat_line">
                        <div class="">ВТРК “Архыз”</div>
                        <div class="table_stat_inps">
                            <input class="inp_green" type="text">
                            <input class="inp_green" type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="table_stat_line">
                        <div class="">ВТРК “Домбай”</div>
                        <div class="table_stat_inps">
                            <input class="inp_green" type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                            <input type="text">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AddObj from '../components/Modal/Data/AddObj.vue';

export default {
    name: "data",
    comments: {},
    components: { AddObj }
}
</script>