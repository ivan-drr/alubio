# Alubio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Deploy

Still working on 🦾🔥

## Preguntas y aclaraciones
_¿No tienes suficiente? Vamos al nivel God del Junior. Resulta que nos aseguran desde Backend que los datos de usuario una vez introducidos no se pueden editar, y que el “status” solo cambia los Lunes y Jueves a las 12 de la noche (porque existe un script que se ejecuta a esas horas). ¿Serías capaz de implementar o describir una mejora para reducir el impacto contra el servidor y hacer la aplicación aún más “gatito friendly”?_

> De forma idílica cada cliente usa un solo dispositivo en este aplicativo. Utilizaría el Local Storage para mantener la persistencia de los datos a modificar, de esta forma por muchos cambios que se den, solo habrá una llamada final a nuestra base de datos con los últimos cambios.
> 
> Pero la realidad es que un cliente puede usar varios dispositivos, por ello:
> 
> Opción 1: Implementaría una alerta antes de que se ejecute la llamada a base de datos, si la última actualización se realizó entre la iteración del ultimo script y ahora, se detectará que estás intentando "machacar" datos ya actualizados y se le informará al usuario de que existen datos recientes que borrará si desea persistir estos.
> 
> Opción 2: Generaría IDs únicas para cada dispositivo algo como una GUID(un integer de 128 bits), de esta forma podría controlar que dispositivo fue el último en persistir cambios, cuando, e incluso que cambios y compararlos.
