<template>
    <div class="content-wrapper">
        <div class="inputs_data">
            <div class="inputs_data_i">
                <div class="input_data">
                    <label for="types">Тип данных</label>
                    <select name="types">
                        <option default value="">ВРП</option>
                    </select>
                </div>
                <div class="input_data">
                    <label for="date">Год</label>
                    <input class="inp_year" type="text" name="date" placeholder="01.01.2022 - 01.01.2023">
                </div>
                <div class="button_data_check">Отобразить</div>
            </div>
        </div>
        <div class="table_stat">
            <div class="table_stat_h">
                <div class="">2013</div>
                <div class="">2014</div>
                <div class="">2015</div>
                <div class="">2016</div>
                <div class="">2017</div>
                <div class="">2018</div>
                <div class="">2019</div>
                <div class="">2020</div>
                <div class="">2021</div>
                <div class="">2022</div>
                <div class="">2023</div>
                <div class="">2024</div>
            </div>
            <div class="table_stat_lines">
                <div class="table_stat_line">
                    <div class="">ВРП</div>
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
</template>
<script>
export default {
  name: 'data',
  components: {}
}
</script>
