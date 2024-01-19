import styles from 'styles/pagination.module.css'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

export default function Pagination ({
  prevText = '',
  prevUrl = '',
  nextText = '',
  nextUrl = ''
}) {
  const router = useRouter()

  const handlePrevClick = () => {
    router.push(prevUrl)
  }

  const handleNextClick = () => {
    router.push(nextUrl)
  }

  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev} onClick={handlePrevClick}>
          <div className={styles.iconText}>
            <FontAwesomeIcon icon={faChevronLeft} color='var(--gray-25)' />
            <span>{prevText}</span>
          </div>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next} onClick={handleNextClick}>
          <div className={styles.iconText}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faChevronRight} color='var(--gray-25)' />
          </div>
        </li>
      )}
    </ul>
  )
}
