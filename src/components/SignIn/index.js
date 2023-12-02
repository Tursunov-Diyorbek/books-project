import { Button, Form, Input, Typography } from "antd";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import styles from "./index.module.sass";

const { Title } = Typography;

export default function SignIn() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className={styles.signUp}>
        <div className={styles.signUp__up}>
          <Title level={2}>Sign In</Title>

          <div className={styles.signUp__googleRegister}>
            <FaGoogle />
            <Typography>Continue with Google</Typography>
          </div>
          <div className={styles.signUp__googleRegister}>
            <FaFacebook />
            <Typography>Continue with Facebook</Typography>
          </div>

          <div className={styles.signUp__or}>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          <Form onFinish={onFinish} className={styles.signUp__form}>
            <p>Your username</p>
            <Form.Item
              name="username1"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            <p>Your email</p>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <p>Your username</p>
            <Form.Item
              name="username2"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            <p>Your password</p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Enter your username" type="password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Button
              </Button>
            </Form.Item>
          </Form>

          <p className={styles.signUp__link}>
            Already signed up? <a href="#">Go to sign in.</a>
          </p>
        </div>
      </div>
    </>
  );
}
