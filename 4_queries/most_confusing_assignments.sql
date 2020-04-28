SELECT assignments.id, assignments.name, assignments.day, assignments.chapter, count(assistance_requests.assignment_id) as total_request
FROM assistance_requests 
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.id
ORDER BY total_request DESC;