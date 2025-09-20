# Three-Pipeline DevOps Setup

This project uses **three specialized pipelines** for complete infrastructure lifecycle management:

## 🏗️ Infrastructure Pipeline (`InfrastructurePipeline`)
**Purpose**: Sets up and manages the container infrastructure

**What it does:**
- ✅ Creates/manages Kind Kubernetes cluster
- ✅ Sets up port mapping (localhost:3000 → cluster:30080)
- ✅ Verifies cluster connectivity
- ✅ Prepares infrastructure for deployments

**When to run:**
- First time setup
- After system restart
- When cluster needs recreation
- Infrastructure maintenance

---

## 🚀 CI Pipeline (`CIPipeline`)
**Purpose**: Handles code CI/CD (Continuous Integration/Deployment)

**What it does:**
- ✅ Verifies infrastructure is ready
- ✅ Checks out latest code from repository
- ✅ Builds Docker image from source code
- ✅ Deploys application to Kubernetes
- ✅ Verifies application is accessible with your changes

**When to run:**
- After any code changes (UI, backend, logic, etc.)
- New features or bug fixes
- Configuration updates
- Dependency changes
- Any modification to the codebase

---

## 🧹 Cleanup Pipeline (`CleanupPipeline`)
**Purpose**: Completely removes all infrastructure and resources

**What it does:**
- ✅ Stops and removes running applications
- ✅ Deletes Kind Kubernetes cluster
- ✅ Cleans up Docker containers, networks, volumes
- ✅ Removes temporary files and processes
- ✅ Frees up port 3000

**When to run:**
- End of development session
- System cleanup
- Before fresh infrastructure setup
- Resource management

---

## 📋 Usage Instructions

### Step 1: Setup Infrastructure
```bash
# In Jenkins, run: InfrastructurePipeline
# This sets up your cluster and infrastructure
```

### Step 2: Deploy Code Changes
```bash
# In Jenkins, run: CIPipeline  
# This builds and deploys your latest code changes
```

### Step 3: Access Application
```bash
# Open browser to: http://localhost:3000
# No manual steps required!
```

### Step 4: Cleanup (when done)
```bash
# In Jenkins, run: CleanupPipeline
# This removes all infrastructure
```

---

## 🔄 Complete Workflow

```
Infrastructure Pipeline → CI Pipeline → Application Ready → Cleanup Pipeline
       (setup)           (deploy)      (use app)          (teardown)
```

## ✅ Benefits

1. **Complete Lifecycle Management**
   - Setup → Deploy → Use → Cleanup
   - No manual resource management

2. **Separation of Concerns**
   - Infrastructure, Application, and Cleanup are separate
   - Can run each pipeline independently

3. **Resource Efficiency**
   - Clean shutdown of all resources
   - No leftover containers or processes

4. **Development Friendly**
   - Quick setup/teardown cycle
   - Fresh environment every time

---

## 🔧 Pipeline Details

| Pipeline | Duration | Frequency | Purpose |
|----------|----------|-----------|---------|
| Infrastructure | ~2-3 min | Setup | Create cluster |
| CI | ~1-2 min | Every commit | Deploy code |
| Cleanup | ~1-2 min | End session | Remove all |

## 🎯 Result

After both pipelines complete successfully:
- ✅ Application runs in Kubernetes cluster
- ✅ Immediately accessible at `http://localhost:3000`
- ✅ Zero manual steps required
- ✅ True CI/CD automation

---

*This setup provides enterprise-grade DevOps automation with proper separation of infrastructure and application concerns.*