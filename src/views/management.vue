<template>
    <div class="content-wrapper">
        <div class="graphics_wrapper">
            <div class="graphics">
                <div class="">
                    <div class="graphics-card">
                        <div class="title">ВРП</div>
                        <div class="graphics-state">
                            <div class="item">
                                <span class="name">ВРП</span>
                                <span class="value">1</span>
                            </div>
                        </div>
                        <div class="graphics">
                            <lineChart :chart-data="bookingChart" :height="200" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="statistic-line">
                <div class="sl_i">
                    <div class="sl_h">
                        <div class="">2013</div>
                        <div class="">2014</div>
                        <div class="">2015</div>
                        <div class="">2016</div>
                        <div class="">2017</div>
                        <div class="">2018</div>
                        <div class="">2019</div>
                        <div class="">2020</div>
                        <div class="">2023</div>
                    </div>
                    <div class="sl_line">
                        <div class="">ВРП</div>
                        <div class="sl_line_i">
                            <div class="">
                                740
                                <sup class="green">+73%</sup>
                            </div>
                            <div class="">
                                0
                                <sup class="red">-99%</sup>
                            </div>
                            <div class="">
                                410
                                <sup class="green">+18%</sup>
                            </div>
                            <div class="">
                                360
                                <sup class="green">+33%</sup>
                            </div>
                            <div class="">
                                360
                                <sup class="green">+33%</sup>
                            </div>
                            <div class="">
                                360
                                <sup class="green">+33%</sup>
                            </div>
                            <div class="">
                                360
                                <sup class="green">+33%</sup>
                            </div>
                            <div class="">
                                360
                                <sup class="green">+33%</sup>
                            </div>
                            <div class="">
                                1140
                                <sup class="green">+176%</sup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import lineChart from '../components/Chart/line-chart';



export default {
    name: "management",
    comments: {},
    data() {
        return {};
    },
    components: { lineChart }
}
</script>
<style scoped lang="scss">
.graphics {
    // margin-top: 40px;

    .graphics-card {
        background: #FFFFFF;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
        border-radius: 24px;
        padding: 30px 60px 30px 30px;
        width: 710px;
        height: 500px;

        .title {
            font-family: 'DIN Pro', serif;
            font-weight: 500;
            font-size: 24px;
            color: #2D3134;
        }

        .graphics-state {
            display: flex;
            justify-content: flex-start;
            gap: 10%;
            margin-top: 45px;
            margin-bottom: 1rem;

            .item {
                position: relative;
                font-family: 'DIN Pro', serif;
                font-weight: 400;
                font-size: 14px;
                color: #717579;

                .value {
                    font-weight: 500;
                    font-size: 18px;
                    color: #2D3134;
                }

                &::before {
                    content: '';
                    display: inline-block;
                    position: relative;
                    margin-right: 5px;
                    width: 12px;
                    height: 12px;
                    background: #0968C0;
                    border-radius: 4px;
                }

                // &:last-child {
                //   margin-left: 50px;
                // }
            }

            .item.red {
                &::before {
                    background: #FF4062;
                }
            }

            .item.green {
                &::before {
                    background: #40FFA3;
                }
            }
        }

        .states {
            margin-top: 50px;

            .item {
                display: flex;
                justify-content: space-between;

                span {
                    font-family: 'DIN Pro', serif;
                }

                .name {
                    font-weight: 400;
                    font-size: 14px;
                    color: #717579;
                }

                .value {
                    font-weight: 500;
                    font-size: 18px;
                    color: #2D3134;
                }
            }
        }
    }
}


.graphics_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 500px;
    margin-top: 2rem;
    margin-bottom: 2rem;
}


.statistic-line {
    width: 720px;
    height: 140px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    border-radius: 24px;
    background-color: white;

    .sl_i {
        width: 100%;
        height: 100%;
        padding: 25px;
    }


    .sl_h {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 13px;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 2rem;

        div {
            width: 46px;
            text-align: left;

            span {
                font-size: 12px;
                margin-left: 5px;
            }

            .green {
                color: #16B455;
            }

            .red {
                color: #FF4062;
            }
        }
    }
}


.sl_line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 2rem;
}

.sl_line_i {
    display: flex;
    justify-content: space-between;
    width: 78%;
    gap: 15px;
    align-items: center;

    div {
        width: 46px !important;
        font-size: 12px;
        display: block !important;
        text-align: center;
        white-space: nowrap;

        sup {
            font-size: 8px;
            margin-left: 0;
        }

        .green {
            color: #16B455;
        }

        .red {
            color: #FF4062;
        }
    }
}
</style>
