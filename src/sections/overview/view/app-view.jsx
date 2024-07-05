// src/AppView.js
import React, { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bootstrap';
import { getDocs, collection } from 'firebase/firestore';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { db } from 'src/firebase/firebase';

import Iconify from 'src/components/iconify';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';
import NewPostForm from '../new-post-form';

const styles = {
  gradientBackground: {
    background: 'linear-gradient(to bottom right, #ADD8E6, #FFFFFF)',
    padding: '20px',
    borderRadius: '10px',
    height: '100%',
  },
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  arrow: {
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderTop: '20px solid transparent',
    borderBottom: '20px solid #3f51b5',
    borderLeft: '20px solid transparent',
  },
  typography: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 1,
    color: 'white',
  },
};

export default function AppView() {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCollection);
        // eslint-disable-next-line no-shadow
        const postsList = postsSnapshot.docs.map((doc) => doc.data());
        setPosts(postsList);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <section>
      <div>
        <Container fluid className="page-section" id="home">
          <Card style={styles.gradientBackground}>
            <Grid direction="row">
              <Grid item xs={12} md={8}>
                <Stack>
                  <div>
                    <div className="reveal">
                      <div>
                        <h1 className="heading-name">
                          Welcome to <br />
                          <strong className="main-name">Art and Hearts</strong>
                        </h1>
                        <b>
                          <div className="innerReveal">
                            Changing lives
                            <br />
                            Restoring hope
                            <br />
                            Igniting potential
                            <br />
                            Empowering comunities
                            <br />
                            Leading the way
                          </div>
                        </b>
                      </div>
                    </div>
                  </div>

                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontSize: '1.2rem',
                      lineHeight: '1.5',
                      color: '#666',
                    }}
                  >
                    Join us in making a difference! Discover ways to contribute, participate in
                    events, and explore how your support helps the community.
                  </Typography>

                  <Stack
                    justifyContent="flex-end"
                    direction="row"
                    alignItems="right"
                    spacing={2}
                    sx={{ mt: 2 }}
                  >
                    <Button
                      variant="contained"
                      sx={{ mt: 1, bgcolor: '#e74c3c' }}
                      endIcon={<Iconify icon="la:donate" />}
                    >
                      Donate Now
                    </Button>

                    <Button
                      variant="contained"
                      sx={{ mt: 1, bgcolor: '#e74c3c' }}
                      endIcon={<Iconify icon="ei:external-link" />}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </div>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4">Art</Typography>

          <Button
            variant="contained"
            sx={{ mt: 1, bgcolor: '#e74c3c' }}
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={handleOpenModal}
          >
            New Post
          </Button>
        </Stack>
        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <PostSearch posts={posts} />
          <PostSort
            sx={{ mt: 1, bgcolor: '#e74c3c', color: '#e74c3c' }}
            options={[
              { value: 'latest', label: 'Latest' },
              { value: 'popular', label: 'Popular' },
              { value: 'oldest', label: 'Oldest' },
            ]}
          />
        </Stack>
        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>

      <Modal show={modalShow} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewPostForm onClose={handleCloseModal} />
        </Modal.Body>
      </Modal>
    </section>
  );
}
