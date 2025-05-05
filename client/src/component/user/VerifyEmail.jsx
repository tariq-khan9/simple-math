// src/pages/VerifyEmail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import { Row, Col, Typography, Spin, Button, Alert, Card } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { verifyUserEmail, loading, error } = useAuth();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      try {
        const result = await verifyUserEmail(token);
        setMessage(result.message);
      } catch (error) {
        console.error("Verification error:", error);
      }
    };
    verify();
  }, [token]);

  if (loading) {
    return (
      <Row justify="center" align="middle" style={{ minHeight: "60vh" }}>
        <Col>
          <Spin size="large" />
          <Text style={{ marginLeft: 16 }}>Verifying your email...</Text>
        </Col>
      </Row>
    );
  }

  return (
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col xs={24} sm={20} md={16} lg={12}>
        <Card>
          {message ? (
            <div style={{ textAlign: "center" }}>
              <CheckCircleOutlined
                style={{
                  fontSize: 48,
                  color: "#52c41a",
                  marginBottom: 20,
                }}
              />
              <Title level={3} style={{ color: "#52c41a" }}>
                Email Verified Successfully!
              </Title>
              <Text>{message}</Text>
              <div style={{ marginTop: 24 }}>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => navigate("/login")}
                >
                  Proceed to Login
                </Button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              <CloseCircleOutlined
                style={{
                  fontSize: 48,
                  color: "#f5222d",
                  marginBottom: 20,
                }}
              />
              <Title level={3} style={{ color: "#f5222d" }}>
                Verification Failed
              </Title>
              <Alert
                message={error}
                type="error"
                showIcon
                style={{ marginBottom: 20 }}
              />
              <Button
                type="default"
                size="large"
                onClick={() => navigate("/register")}
              >
                Try Registering Again
              </Button>
            </div>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default VerifyEmail;
