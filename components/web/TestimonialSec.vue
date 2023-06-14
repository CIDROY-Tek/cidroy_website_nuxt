<template>
    <section id="testimonial" class="">
        <v-row align="center">
            <v-col cols="12" align="center">
                <h3 class="display-2 font-weight-bold black--text px-5 my-10">
                    Trusted by Agencies
                    & Business Owners
                </h3>
            </v-col>
            <v-sheet class="mx-auto" max-width="98%" color="transparent">
                <v-slide-group class="" active-class="success" show-arrows>

                    <template v-slot:prev="{ on, attrs }">
                        <v-btn color="red" small dark v-bind="attrs" v-on="on">
                            <v-icon small>mdi-arrow-left</v-icon></v-btn>
                    </template>
                    <template v-slot:next="{ on, attrs }">
                        <v-btn color="red" small dark v-bind="attrs" v-on="on">
                            <v-icon small>mdi-arrow-right</v-icon></v-btn>
                    </template>
                    <v-slide-item v-for="item in testimonialCard" :key="item.company">
                        <v-card style="box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);
border-radius: 12px;" class="ma-2" color="#FFFFFF" width="28vw" height="auto">
                            <v-container>
                                <v-row align="center" class="mx-4 mt-4 mb-8">
                                    <v-col align="center" cols="12">
                                        <v-avatar color="#C4C4C4" size="100"></v-avatar>
                                    </v-col>
                                    <v-col align="center" cols="12">
                                        <h1 class=" font-weight-regular black--text px-4">
                                            {{ item.name }}
                                        </h1>
                                        <p class="subtitle-1 font-weight-light red--text"> {{ item.company }}</p>
                                    </v-col>
                                    <v-col align="left" cols="12">
                                        <h1 class="headline font-weight-light black--text text-justify">
                                            {{ item.description }}
                                        </h1>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </v-row>
    </section>
</template>
<script>
export default {
    data: () => ({
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