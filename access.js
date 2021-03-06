//2. El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario
//para el ingreso de la URL de la imagen a tratar.



//3. Los estilos de este HTML deben ser definidos por un archivo CSS alojado en el
//servidor.



//4. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen
//tomada por la URL enviada del formulario con el paquete Jimp. La imagen debe ser
//procesada en escala de grises, con calidad a un 60% y redimensionada a unos 350px
//de ancho. Posteriormente debe ser guardada con nombre “newImg.jpg” y devuelta al
//cliente.


//1. El servidor debe ser levantado por instrucción de una aplicación Node que use el
//paquete Yargs para capturar los argumentos en la línea de comando. Se deberá
//ejecutar el comando para levantar el servidor solo si el valor de la propiedad “key” es
//la correcta (123).

const yargs = require('yargs')
const child = require('child_process')

const key = '123'
yargs

    .command(
        'run-server',
        'command to run a server', {
            key: {
                describe: 'access key to run the server',
                demand: true,
                alias: 'k',
            },
        },
        (args) => {
            if (args.key === key) {
                child.exec('nodemon app.js', (err, stdout) => {
                    if (err) console.log(err)
                    else console.log('Server running on port')
                })
            } else {
                console.log('incorrect key')
            }
        }
    )
    .help().argv