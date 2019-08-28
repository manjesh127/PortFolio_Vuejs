<template>
  <div class="about">
    <div class="card mb-3 animated fadeInUp fast">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="https://www.freedomoptions.io">
            <img src="@/assets/freedom.png" class="card-img" />
          </a>
        </div>
        <div class="col-md-8 bg-dark">
          <div class="card-body">
            <a href="https://www.freedomoptions.io">
              <h2 class="card-title">Freedom Options</h2>
            </a>
            <p
              class="card-text"
            >FreedomOptions.io Real Time Crypto Binary Option Trading [BTC][ETH][FDM]</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 animated fadeInUp fast">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="https://www.evoai.network">
            <img src="@/assets/evoai.png" class="card-img" />
          </a>
        </div>
        <div class="col-md-8 bg-dark">
          <div class="card-body">
            <a href="https://www.evoai.network">
              <h2 class="card-title">EvoAI</h2>
            </a>
            <p
              class="card-text"
            >The EVOAI platform offers users the opportunity to invest in a variety of trading systems, from automatic arbitrage pools with passive income to artificial intelligence-based signals and advanced bots for manual trading.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 animated fadeInUp fast">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="https://shop.bitdomains.io">
            <img src="@/assets/bitdomain.png" class="card-img" />
          </a>
        </div>
        <div class="col-md-8 bg-dark">
          <div class="card-body">
            <a href="https://shop.bitdomains.io">
              <h2 class="card-title">BitDomains</h2>
            </a>
            <p
              class="card-text"
            >Decentralized Domain Marketplace, Domain Registrar which allows FREE Domain Registrations and Real-time Instant Domain Trading Exchange.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style  scoped>
/* img {
  width: 500px;
} */
.about {
  min-height: 100vh;
}
.card-text {
  color: white !important;
}
.card-title {
  color: #84cda2 !important;
}
.card-title:hover {
  color: #22819b !important;
}
a {
  text-decoration: none;
}
img {
  width: 500px;
  /* height: 100px; */
  /* background: red; */
  -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
  transition: width 1s;
}

img:hover {
  width: 530px;
}
</style>