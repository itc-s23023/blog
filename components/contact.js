import styles from 'styles/contact.module.css'

const Contact = ({ title, mail }) => (
  <div className={styles.stack}>
    <h3 className={styles.heading}>Contact</h3>
    <address>cube@web.mail.address</address>
  </div>
)

export default Contact
