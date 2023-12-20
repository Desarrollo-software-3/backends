# Backend desplegado en Google Cloud con Kubernetes

Este proyecto utiliza Google Cloud y Kubernetes para el despliegue de su backend.(Clústeres de Kubernetes)

## Configuración

Asegúrate de tener las siguientes herramientas instaladas antes de comenzar:

- [Google Cloud SDK](https://cloud.google.com/sdk)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl)

## Despliegue en Google Cloud

1. Inicia sesión en tu cuenta de Google Cloud:

    ```bash
    gcloud auth login
    ```

2. Configura tu proyecto de Google Cloud:

    ```bash
    gcloud config set project NOMBRE_DE_TU_PROYECTO
    ```

3. Despliega la aplicación en Kubernetes:

    ```bash
    kubectl apply -f ruta/a/tus/archivos/de/configuracion
    ```

![image](https://github.com/Desarrollo-software-3/backends/assets/92823297/c1aa2404-f9d1-441a-abed-e5f4254a67b3)

![image](https://github.com/Desarrollo-software-3/backends/assets/92823297/1bd12b38-0cd6-45b2-b9b6-83a8159d4b3f)
![image](https://github.com/Desarrollo-software-3/backends/assets/92823297/c85176a3-3868-4ff0-9b92-5cfc77c20fad)




