// src/AppView.js
import React, { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { db } from 'src/firebase/firebase';

import Iconify from 'src/components/iconify';

import ProjectSort from '../project-sort';
import ProjectCard from '../project-card';
import ProjectSearch from '../project-search';
import NewProjectForm from '../new-project-form';

export default function ProjectsView() {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        // eslint-disable-next-line no-shadow
        const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
        setProjects(projectsList);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section>
      <span style={{ margin: '80px' }} />

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Projects</Typography>

          <Button
            variant="contained"
            sx={{ mt: 1, bgcolor: '#e74c3c' }}
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleOpenModal}
          >
            New Project
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <ProjectSearch projects={projects} />
          <ProjectSort
            options={[
              { value: 'latest', label: 'Latest' },
              { value: 'popular', label: 'Popular' },
              { value: 'oldest', label: 'Oldest' },
            ]}
          />
        </Stack>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Grid>
      </Container>

        <Modal show={modalShow} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewProjectForm onClose={handleCloseModal} />
          </Modal.Body>
        </Modal>
    </section>
  );
}
