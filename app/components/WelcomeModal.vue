<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="showModal" class="modal-overlay" @click.self="handleBackgroundClick">
                <div class="modal-container">
                    <div class="modal-content">
                        <h2>Alex's Unofficial MSM Wiki</h2>
                        <p>
                            100% of the information has been filled in by an AI which has read information from the Fandom page.  Do not use this wiki
                            for anything other than contributing!  Nearly all of the information on this website is unreliable or false right now.
                            <br /><br />
                            You may contribute to the site to add corrections through the GitHub Repository or join our Discord community!
                        </p>
                        
                        <div class="social-links">
                            <a href="https://github.com/AlexanderEpolite/MySingingMonsters-wiki" target="_blank"
                                rel="noopener noreferrer" class="social-link github">
                                <Icon name="uil:github" />
                                <span>Contribute on GitHub</span>
                            </a>
                            <a href="https://discord.gg/eD4EtNmvJS" target="_blank"
                                rel="noopener noreferrer" class="social-link discord">
                                <Icon name="uil:discord" />
                                <span>Join our Discord</span>
                            </a>
                        </div>

                        <p class="disclaimer">
                            It should go without saying, but this website is NOT AFFILIATED with BBB or My Singing Monsters.
                            <br><br>
                            See the footer of this website for the full disclaimer.
                        </p>
                        
                        <div class="modal-actions">
                            <button 
                                @click="closeModal" 
                                class="btn-primary"
                                :disabled="!canDismiss"
                            >
                                {{ canDismiss ? "Close" : `Wait ${countdown}s...` }}
                            </button>
                            <button 
                                @click="dontShowAgain" 
                                class="btn-secondary"
                                :disabled="!canDismiss"
                            >
                                Don't show again
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped lang="less">
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 1rem;
}

.modal-container {
    width: 100%;
    max-width: 500px;
    animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-content {
    background-color: var(--ctp-surface0);
    border: 2px solid var(--ctp-mauve);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

    h2 {
        color: var(--ctp-mauve);
        margin-bottom: 1rem;
        font-size: 1.75rem;
    }

    p {
        color: var(--ctp-text);
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .disclaimer {
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        font-size: 0.9rem;
        color: var(--ctp-subtext0);
    }
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.social-link {
    flex: 1;
    min-width: 180px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 1.95rem;
    font-weight: 500;
    transition: all 0.2s ease;
    text-decoration: none;

    span {
        font-size: 1.2rem;
    }

    &:hover {
        transform: translateY(-2px);
    }
}

.social-link.github {
    background-color: var(--ctp-surface1);
    color: var(--ctp-text);

    &:hover {
        background-color: var(--ctp-surface2);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
}

.social-link.discord {
    background-color: #5865F2;
    color: white;

    &:hover {
        background-color: #4752C4;
        box-shadow: 0 4px 12px rgba(88, 101, 242, 0.4);
    }
}

.modal-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
    flex: 1;
    min-width: 150px;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}

.btn-primary {
    background-color: var(--ctp-mauve);
    color: var(--ctp-crust);

    &:hover:not(:disabled) {
        background-color: var(--ctp-pink);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(203, 166, 247, 0.4);
    }
}

.btn-secondary {
    background-color: var(--ctp-surface1);
    color: var(--ctp-text);

    &:hover:not(:disabled) {
        background-color: var(--ctp-surface2);
        transform: translateY(-2px);
    }
}

//modal transition animations
.modal-enter-active {
    transition: opacity 0.3s ease;

    .modal-container {
        animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
}

.modal-leave-active {
    transition: opacity 0.25s ease;

    .modal-container {
        animation: slideOut 0.25s cubic-bezier(0.5, 0, 0.75, 0);
    }
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes slideOut {
    from {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    to {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
    }
}

@media (max-width: 640px) {
    .social-links {
        flex-direction: column;
    }

    .social-link {
        width: 100%;
    }

    .modal-actions {
        flex-direction: column;
    }
    
    .btn-primary,
    .btn-secondary {
        width: 100%;
    }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            showModal: false,
            canDismiss: false,
            countdown: 5,
            countdownInterval: null as ReturnType<typeof setInterval> | null
        };
    },
    methods: {
        closeModal() {
            if (!this.canDismiss) return;
            this.showModal = false;
        },
        dontShowAgain() {
            if (!this.canDismiss) return;
            localStorage.setItem("msm-wiki-welcome-dismissed", "true");
            this.showModal = false;
        },
        handleBackgroundClick() {
            //do nothing - prevent closing on background click
        },
        startCountdown() {
            this.countdownInterval = setInterval(() => {
                this.countdown--;
                if (this.countdown <= 0) {
                    this.canDismiss = true;
                    if (this.countdownInterval) {
                        clearInterval(this.countdownInterval);
                    }
                }
            }, 1000);
        }
    },
    mounted() {
        //check if user has dismissed the modal before
        const dismissed = localStorage.getItem("msm-wiki-welcome-dismissed");
        
        if (!dismissed) {
            //small delay before showing modal for better ux
            setTimeout(() => {
                this.showModal = true;
                this.startCountdown();
            }, 500);
        }
    },
    unmounted() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }
});
</script>