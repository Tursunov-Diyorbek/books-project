import { Button, Typography, Modal, Form, Input } from "antd";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import styles from "./index.module.sass";
const { Title } = Typography;

export default function BookCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);

  const handleOk = () => setIsModalOpen(false);

  const handleCancel = () => setIsModalOpen(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      <div className={styles.bookCards}>
        <div className={styles.header}>
          <div className={styles.booksNumber}>
            <Title level={2}>
              You’ve got <span>7 book</span>
            </Title>
            <Typography>Your task today</Typography>
          </div>

          <div className={styles.cardNameSearch}>
            <input type="text" placeholder="Enter your name" />
            <Button type="primary" onClick={showModal}>
              + Create a book
            </Button>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.books}>
            <Title level={3}>Raspberry Pi User Guide</Title>

            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </p>

            <div className={styles.books__footer}>
              <p>Eben Upton: 2012-year</p>
              <p>211 pages</p>
            </div>

            <div className={styles.books__deleteAndEdit}>
              <AiOutlineDelete className={styles.delete} />
              <CiEdit className={styles.edit} />
            </div>
          </div>

          <div className={styles.books}>
            <Title level={3}>Raspberry Pi User Guide</Title>

            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </p>

            <div className={styles.books__footer}>
              <p>Eben Upton: 2012-year</p>
              <p>211 pages</p>
            </div>
          </div>

          <div className={styles.books}>
            <Title level={3}>Raspberry Pi User Guide</Title>

            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </p>

            <div className={styles.books__footer}>
              <p>Eben Upton: 2012-year</p>
              <p>211 pages</p>
            </div>
          </div>

          <div className={styles.books}>
            <Title level={3}>Raspberry Pi User Guide</Title>

            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </p>

            <div className={styles.books__footer}>
              <p>Eben Upton: 2012-year</p>
              <p>211 pages</p>
            </div>
          </div>

          <div className={styles.books}>
            <Title level={3}>Raspberry Pi User Guide</Title>

            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </p>

            <div className={styles.books__footer}>
              <p>Eben Upton: 2012-year</p>
              <p>211 pages</p>
            </div>
          </div>

          <div className={styles.books}>
            <Title level={3}>Raspberry Pi User Guide</Title>

            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </p>

            <div className={styles.books__footer}>
              <p>Eben Upton: 2012-year</p>
              <p>211 pages</p>
            </div>
          </div>

          <div className={styles.books}>
            <Title level={3}>Raspberry Pi User Guide</Title>

            <p>
              Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque
              varius vestibulum magna in. Tortor quisque nisl congue ut tellus
              sem id.
            </p>

            <div className={styles.books__footer}>
              <p>Eben Upton: 2012-year</p>
              <p>211 pages</p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Create a book"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form onFinish={onFinish} className={styles.form} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please input your Title!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="author"
            label="Author"
            rules={[
              {
                required: true,
                message: "Please input your Author!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="cover"
            label="Cover"
            rules={[
              {
                required: true,
                message: "Please input your Cover!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="published"
            label="Published"
            rules={[
              {
                required: true,
                message: "Please input your Published!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="pages"
            label="Pages"
            rules={[
              {
                required: true,
                message: "Please input your Pages!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
