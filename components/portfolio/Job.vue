<template>
  <div class="job mb-20">
    <h2 class="mb-8 text-center text-3xl">Alguno de mis trabajos</h2>

    <div class="article-cards-wrapper flex flex-wrap items-start">
      <!-- <article>
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card />
          <template slot="popover">
            <job-card-tooltip
              title="course.title"
              subtitle="course.category.name"
              description="course.subtitle"
              wsl="course.wsl"
            />
          </template>
        </v-popover>
      </article>
      <article>
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card />
          <template slot="popover">
            <job-card-tooltip
              title="course.title"
              subtitle="course.category.name"
              description="course.subtitle"
              wsl="course.wsl"
            />
          </template>
        </v-popover>
      </article>
      <article>
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card />
          <template slot="popover">
            <job-card-tooltip
              title="course.title"
              subtitle="course.category.name"
              description="course.subtitle"
              wsl="course.wsl"
            />
          </template>
        </v-popover>
      </article> -->
      <article v-for="item of resources" :key="item.title">
        <v-popover offset="16" trigger="hover" placement="right-start">
          <job-card :project="item.project" />
          <template slot="popover">
            <job-card-tooltip
              :title="item.title"
              :description="item.descripcion"
              :frontend="item.frontend"
              :backend="item.backend"
            />
          </template>
        </v-popover>
      </article>
    </div>
  </div>
</template>

<script>
import JobCard from '@/components/portfolio/help/JobCard.vue'
import JobCardTooltip from '@/components/portfolio/help/JobCardTooltip.vue'

export default {
  components: {
    JobCard,
    JobCardTooltip
  },
  data() {
    return {
      resources: [
        {
          title: 'Meetup',
          description:
            'La aplicacion se usa para reuniones eventos salas de chat y mucha funcionalidades mas..',
          frontend:
            'El frontend se ha construido con vuejs y css junto a sass y muchos plugis como socket.io, axios, vue-toasted y mucho mas...',
          backend:
            'Para el backend se ha construido una api con nodejs puede ver en github para mas detalle',
          project: {
            src: 'afmeetup.herokuapp.jpg',
            name: 'Alfredo Fernandez',
            project: 'Aplicacion para eventos',
            demo: 'https://afmeetup.herokuapp.com/',
            code: 'https://github.com/afreddier/meetups',
            icon: {
              vue: 'vue',
              node: 'node'
            }
          }
        },
        {
          title: 'Pagina personal',
          description:
            'Es una aplicación para escribir blogs guardar proyectos con una plantilla diferenta para la administración',
          frontend:
            'En el cliente esta construido con nuxt un framework basado en vuejs',
          backend: 'En lado del servidor se construye un servicio con nodejs',
          project: {
            src: 'alfredofernandez.herokuapp.jpg',
            name: 'Alfredo Fernandez',
            project: 'Aplicacion personal con administrador de contenidos',
            demo: 'https://alfredofernandez.herokuapp.com/',
            code: 'https://github.com/afreddier/yourself',
            icon: {
              nuxt: 'nuxt',
              node: 'node'
            }
          }
        },
        {
          title: 'fernandezalfredo.com mi app personal',
          description: 'Una aplicacion para escribir articulos',
          frontend:
            'El cliente esta construido con nuxtjs y la nueva fetch de nuxt con marcadores de tiempo, la informacion se cachea de tal modo sera mas rapido aparte que ya es spa',
          backend:
            'La API esta escrito con nodejs aunque la mayor parte se consume servicios de dev.to',
          project: {
            src: 'fernandezalfredo.jpg',
            name: 'Alfredo Fernandez',
            project: 'Mi aplicación actual',
            demo: 'https://fernandezalfredo.com/',
            code: 'https://github.com/afreddier/my_web_site_client',
            icon: {
              dev_to: 'dev_to',
              node: 'node',
              nuxt: 'nuxt'
            }
          }
        },
        {
          title: 'Sistema de ventas',
          description:
            'Sistema para control de almacen proveedor de productos controlar empleados de venta, productos con codigo QR etc.',
          frontend: 'El cliente se ha construido con vuejs',
          backend: 'Para el backend se construido una API con node',
          project: {
            src: 'sistema.jpg',
            name: 'Alfredo Fernandez',
            project: 'Sistema de ventas',
            demo: 'https://github.com/afreddier/sistemaventas',
            code: 'https://github.com/afreddier/sistemaventas',
            icon: {
              vue: 'vue',
              node: 'node'
            }
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  @apply bg-primary-dark rounded-2xl overflow-hidden;
  box-shadow: $shadow;
  &:hover {
    box-shadow: $small-shadow;
    h1 {
      transition: all 0.2s ease;
      &:hover {
        color: $primary-color;
      }
    }
  }
  width: calc(100% - 2 * 0.5rem);
  margin: 0.5rem;
  @media (min-width: $screen-sm) {
    width: calc(50% - 2 * 0.5rem);
  }
}
//   width: calc(100% - 2 * 0.5rem);
//   margin: 0.5rem;
//   @media (min-width: $screen-sm) {
//     width: calc(50% - 2 * 0.5rem);
//   }
//   @media (min-width: $screen-lg) {
//     width: calc(33.33333% - 2 * 0.5rem);
//   }
// }
</style>
