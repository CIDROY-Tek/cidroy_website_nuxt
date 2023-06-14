<template>
    <section id="mtestimonial">
        <v-row align="center">
            <v-col cols="12" align="center">
                <h1 class="display-1 font-weight-bold black--text px-5" style="margin-top: 50px">
                    Trusted by Agencies
                    & Business Owners
                </h1>
            </v-col>
            <v-col cols="12" align="center">
                <v-carousel v-model="carousel" hide-delimiter-background class="pa-2" active-class="success"
                    :show-arrows="false" height="90vh">
                    <v-carousel-item v-for="item in testimonialCard" :key="item.company" >
                        <v-card class="" style="box-shadow: 7.05009px 7.05009px 35.2505px 2.11503px rgba(39, 92, 141, 0.1);
border-radius: 8.46011px;" color="#FFFFFF" width="100%" height="auto">
                            <v-container>
                                <v-row align="center" class=" ">
                                    <v-col align="center" cols="12">
                                        <v-avatar color="#C4C4C4" size="100"></v-avatar>
                                    </v-col>
                                    <v-col align="center" cols="12">
                                        <h1 class=" font-weight-regular black--text px-4">
                                            {{ item.name }}
                                        </h1>
                                        <h1 class="subtitle-1 font-weight-light red--text">{{ item.company }}</h1>
                                        <h3 class="headline font-weight-light black--text text-justify">
                                            {{ item.description }}
                                        </h3>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </section>
</template>
<script>
export default {
    data: () => ({
        carousel: 0,
        testimonialCard: [
            {
                name: 'Testimonial 1',
                company: 'Calytics global Pvt Ltd',
                description: 'Being a startup we were very skeptical on outsourcing our tech development, But Cidroy blended in our startup culture and made sure tech was on point and in align with our market development and it makes sense for us compared to building a ground up team.'
            },
        ]

    })
}
</script>
<style >
.v-carousel__controls__item.v-btn.v-btn--icon {
   
    /* margin-bottom: 1vh; */
    background: #D1DCE5;
    height: 10px;
    width: 10px;
    border-radius: 50%;
}

.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active {
    background: #EA2E49;
}

.v-carousel__controls__item.v-btn.v-btn--icon.v-btn--active:hover {
    background: #EA2E49;
}

.v-btn__content .v-icon {
    display: none;
}
</style>