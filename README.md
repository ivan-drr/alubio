# Alubio

## Project details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

### Development server
Before you run this project add your [GoREST](https://gorest.co.in/) access token on both of your enviroment files like this:
```javascript
export  const  environment  = {
	production: true,
	gorestToken: 'your token here'
};
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Test answers

### Question 1
_El Detalle A. Muestra la fecha “dob” como la diferencia de tiempo entre la fecha de nacimiento y la fecha actual. Por ejemplo, si “dob” es 07-20-1982, y estamos a 07-23-2022, se leería: “Nació hace 40 años y 3 días (07-20-1982)”._
> Haría esta funcionalidad con una pipe BirthDate.pipe.ts

### Question 2
_¿No tienes suficiente? Vamos al nivel God del Junior. Resulta que nos aseguran desde Backend que los datos de usuario una vez introducidos no se pueden editar, y que el “status” solo cambia los Lunes y Jueves a las 12 de la noche (porque existe un script que se ejecuta a esas horas). ¿Serías capaz de implementar o describir una mejora para reducir el impacto contra el servidor y hacer la aplicación aún más “gatito friendly”?_

> De forma idílica cada cliente usa un solo dispositivo en este aplicativo. Utilizaría el Local Storage para mantener la persistencia de los datos a modificar, de esta forma por muchos cambios que se den, solo habrá una llamada final a nuestra base de datos con los últimos cambios.
> 
> Pero la realidad es que un cliente puede usar varios dispositivos, por ello:
> 
> Opción 1: Implementaría una alerta antes de que se ejecute la llamada a base de datos, si la última actualización se realizó entre la iteración del ultimo script y ahora, se detectará que estás intentando "machacar" datos ya actualizados y se le informará al usuario de que existen datos recientes que borrará si desea persistir estos.
> 
> Opción 2: Generaría IDs únicas para cada dispositivo algo como una GUID(un integer de 128 bits), de esta forma podría controlar que dispositivo fue el último en persistir cambios, cuando, e incluso que cambios y compararlos.

### Personal clarification
> En varios apartados se hace mención a llamadas inútiles al backend. La mayoría de ellas las resolvería cacheándolas, una vez ha sido ejecutado el aplicativo, si accedo a la vista de owners, salgo y vuelvo a entrar, es una tontería volver a pedir los recursos a menos que algo haya cambiado. Esto dependiendo de la API que use lo conseguiría de varias formas, por ejemplo como ya he hecho en otros proyectos, las llamadas a firebase se cachean automáticamente, además lo configuré para persistencia offline automática, lo cual resuelve la mayoría de problemas comunes.
