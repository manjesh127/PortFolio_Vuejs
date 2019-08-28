<template>
  <div class="data bg-dark">
    <!-- <div class="container"> -->
    <div class="row pt-4 r2">
      <h5>
        active_cryptocurrencies :
        <b>{{title}}</b>
      </h5>
      <h5>
        active_exchanges :
        <b>{{acExch}}</b>
      </h5>
      <h5>
        btc_dominance :
        <b>{{btcD}}</b>
      </h5>
      <h5>
        eth_dominance :
        <b>{{ethD}}</b>
      </h5>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";

export default {
  name: "Data",
  data() {
    return {
      title: "",
      data: "",
      acExch: "",
      btcD: "",
      ethD: ""
    };
  },
  created() {
    axios
      .post("https://api.evoai.network/marketdata")
      .then(res => {
        console.log("result", res);
        this.title = res.data.data.data.active_cryptocurrencies;
        this.acExch = res.data.data.data.active_exchanges;
        this.btcD = res.data.data.data.btc_dominance;
        this.ethD = res.data.data.data.eth_dominance;
      })
      .catch(e => {
        console.log("error", e);
      });
  }
};
</script>

<style  scoped>
.data {
  min-height: 80vh;
}
.row {
  color: white !important;
}
.r2 {
  margin: auto;
}
.r2 h5 {
  margin: auto;
}
.r2 b {
  color: #e65c00;
}
</style>