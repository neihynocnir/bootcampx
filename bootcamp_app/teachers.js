const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const extractUserValues = () => {
  const [, , cohort_name] = process.argv;
  return [ cohort_name ]
}

const query = `SELECT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
GROUP BY teachers.name, cohorts.name
ORDER BY teacher;`;
const values =  extractUserValues()


pool.query(query, values)
.then(res => {
  res.rows.forEach(listTeachers => {
    console.log(`${listTeachers.cohort}: ${listTeachers.teacher}`)
  });
})
.catch(err => console.error('query error', err.stack));