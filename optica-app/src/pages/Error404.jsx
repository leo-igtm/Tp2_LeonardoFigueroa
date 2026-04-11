export default function Error404(){

    return (
        <section className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">La página no existe</h1>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                La ruta que intentas abrir no está disponible.
            </p>
        </section>
    )

}