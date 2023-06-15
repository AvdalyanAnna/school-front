<template>
   <div class="rbt-contact-address">
    <div class="container">
      <div class="row g-5 d-none">
        <div class="col-lg-6">
          <div class="thumbnail">
            <v-img
              class="w-100 radius-6"
              src="about/contact.jpg"
              alt="Contact Images"
            />
          </div>
        </div>

        <div class="col-lg-6">
          <div class="rbt-contact-form contact-form-style-1 max-width-auto">
            <div class="section-title text-start">
              <span class="subtitle bg-primary-opacity"
                >EDUCATION FOR EVERYONE</span
              >
            </div>
            <h3 class="title">Get a Free Course You Can Contact With Me</h3>
            <form
              id="contact-form"
              method="POST"
              action="mail.php"
              class="rainbow-dynamic-form max-width-auto"
            >
              <v-input label="Name" name="name" />
              <v-input label="Email" name="email" />
              <v-input label="Your Subject" name="subject" />
              <v-textarea label="Message" name="message" />
              <div class="form-submit-group">
                <v-button
                  isGradient
                  md
                  full
                  btnIcon1="feather-arrow-right"
                  btnIcon2="feather-arrow-right"
                  isBtn
                  type="submit"
                >
                  GET IT NOW
                </v-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>