
export default function AlertModel({ alertVerify, setalertVerify }) {

    return (
        <>
            <Modal opened={alertVerify.open} onClose={() => setalertVerify({ open: false, message: "" })} title="Horse Fire Shilajit Resin" centered>

                <section>
                    <div>{alertVerify.message}</div>
                </section>

            </Modal>

        </>
    );
}