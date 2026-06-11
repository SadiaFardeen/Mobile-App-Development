import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ProfileCardProps {
  name: string;
  studentId: string;
  department: string;
  bio: string;
}

export default function ProfileCard({ name, studentId, department, bio }: ProfileCardProps) {
  const initials = name ? name.split(' ').map(word => word[0]).join('').toUpperCase() : '';
  const [followed, setFollowed] = useState(false);

  const handleFollow = () => {
    setFollowed(!followed);
  };

  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.idBadge}>ID: {studentId}</Text>
      <Text style={styles.role}>{department}</Text>

      <View style={styles.divider} />

      <Text style={styles.bio}>{bio}</Text>

      <TouchableOpacity
        style={[styles.button, followed && styles.buttonFollowed]}
        onPress={handleFollow}
      >
        <Text style={[styles.buttonText, followed && styles.buttonTextFollowed]}>
          {followed ? 'Following ✓' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0D9488',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
    textAlign: 'center',
  },
  idBadge: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '600',
    backgroundColor: '#E5E7EB',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 6,
  },
  role: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
  },
  bio: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#0D9488',
    backgroundColor: 'transparent',
  },
  buttonFollowed: {
    backgroundColor: '#0D9488',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D9488',
  },
  buttonTextFollowed: {
    color: '#FFFFFF',
  },
});